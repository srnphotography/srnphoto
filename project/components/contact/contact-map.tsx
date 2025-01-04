export function ContactMap() {
  return (
    <div className="mt-12 h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.013766503767!2d76.89811937499878!3d10.956585089199831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c1f418e5555%3A0x4f1d352c7a3c98f0!2sEttimadai%20Railway%20Station%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709799046436!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}