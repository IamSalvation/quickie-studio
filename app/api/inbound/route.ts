import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1. Get the raw body to verify the webhook signature
    const payload = await req.text();

    // 2. Get the required headers from Resend (Svix)
    const id = req.headers.get("svix-id");
    const timestamp = req.headers.get("svix-timestamp");
    const signature = req.headers.get("svix-signature");

    if (!id || !timestamp || !signature) {
      return new NextResponse("Missing headers", { status: 400 });
    }

    // 3. Verify the webhook is actually from Resend
    const result = resend.webhooks.verify({
      payload,
      headers: {
        id,
        timestamp,
        signature,
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });

    // 4. Check if the event is an incoming email
    if (result.type === "email.received") {
      const { error } = await resend.emails.receiving.forward({
        emailId: result.data.email_id,
        to: "obiorajoshua@gmail.com", // Your Gmail address
        from: "hello@quickie-studio.com", // The custom address it forwards from
      });

      if (error) {
        console.error("Forwarding error:", error);
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    // Acknowledge other event types
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook verification failed:", error);
    return new NextResponse("Invalid webhook", { status: 400 });
  }
}
