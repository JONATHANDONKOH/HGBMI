"use client"
export default function LocationMotion() {
  return (
    <main className="min-h-screen">
      {/* Embedded Google Map */}
      <div className="w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4474528338947!2d-0.05825892555233181!3d5.648218294333065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81357e6bb9db%3A0xdf659928606db91e!2sHour%20of%20Grace%20Believers%20Ministries%20International!5e0!3m2!1sen!2sgh!4v1762594726158!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Church Location Map"
        ></iframe>
      </div>
    </main>
  )
}

