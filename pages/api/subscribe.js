import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name is required' });
  }


  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
      },
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
  // Check if the error is because the member already exists
  if (error.response && error.response.body) {
    const responseBody = error.response.body
    
    if (responseBody.title === "Member Exists") {
      return res.status(400).json({ error: "This email is already subscribed to the list." });
    } else if (responseBody.title === "Invalid Resource") {
      // Handle other specific errors, e.g., validation errors
      return res.status(400).json({ error: responseBody.detail });
    }
    // Handle all other API errors
    return res.status(500).json({ error: responseBody.detail || "An error occurred" });
  }

  // Fallback error handling for non-API errors
  return res.status(500).json({ error: error.message || "An unexpected error occurred" });
}
};