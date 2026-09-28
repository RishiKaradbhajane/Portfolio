import { NextRequest } from "next/server";

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY is not set in environment variables.");
      return Response.json(
        { success: false, error: "Contact form is not configured. Please reach out via email directly." },
        { status: 500 }
      );
    }

    // Submit to Web3Forms API
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Portfolio Contact from ${name}`,
        from_name: name,
        reply_to: email,
        name,
        email,
        message,
      }),
    });

    const data = await web3Response.json();

    if (data.success) {
      return Response.json({ success: true, message: "Message sent successfully!" });
    } else {
      console.error("Web3Forms error:", data);
      return Response.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
