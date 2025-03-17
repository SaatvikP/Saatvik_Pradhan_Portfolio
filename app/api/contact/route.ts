import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would send an email or store the contact in a database
    // Example: await sendEmail({ name, email, message });
    // Example: await prisma.contact.create({ data: { name, email, message } });

    // For demonstration purposes, we'll simulate a successful response
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

