import React from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Send successful!");
  }
  return (
    <>
      {/* Section one */}
      <div
        className="w-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${assets.imgAbout})` }}
      >
        {/* Overlay đen làm mờ ảnh */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Nội dung nổi bật */}
        <div className="relative z-10 text-white text-center px-4 animate__animated animate__fadeInUp">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-weigth-400 mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Whether you have questions, need assistance, or simply want to share..
          </p>
        </div>
      </div>


      {/* Section two */}
      <div className="flex flex-col" data-aos="fade-up">
        <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm py-20 px-4">

          <h1 className="text-4xl font-playfair font-semibold text-slate-700 pb-4">Love to hear from you Get in touch!</h1>
          <p className="text-sm text-gray-500 text-center pb-10">
            We'd love to hear from you. Whether it's a question, feedback, or just a hello — we're here for you.<br />
            Reach out and we'll get back to you as soon as we can.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
            <div className="w-full">
              <label htmlFor="name" className="text-black/70">Your Name</label>
              <input placeholder="Your name" name="name" id="name" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-black/70">Your Email</label>
              <input placeholder="Your Email" name="email" id="email" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
            </div>
          </div>

          <div className="mt-6 w-[350px] md:w-[700px]">
            <label htmlFor="message" className="text-black/70">Message</label>
            <textarea placeholder="Message" name="message" id="message" className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
          </div>

          <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
        </form>


        {/* Map  */}

        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="grid md:grid-cols-3 gap-16 items-center px-6 md:px-16 lg:px-24 xl:px-32 py-16 max-w-7xl w-full">
            {/* Map bên trái - chiếm 2 phần */}
            <div className="md:col-span-2 w-full h-[600px] overflow-hidden rounded-xl shadow-lg" data-aos="fade-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.3578531289686!2d109.2751105747855!3d12.358944928014646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170694dda67b623%3A0x540e9a3deeb55d78!2sSix%20Senses%20Ninh%20Van%20Bay!5e0!3m2!1svi!2s!4v1748428927597!5m2!1svi!2s"
                className="border-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            {/* Info bên phải */}
            <div className="text-gray-700 space-y-8" data-aos="fade-left">
              <div>
                <h3 className="text-3xl font-playfair font-medium mb-3">L'Opera Hotel</h3>
                <p className="text-gray-500 text-lg">Open Hours: Monday — Sunday</p>
                <p className="text-gray-500 text-lg">Telephone: +0123456789</p>
                <p className="text-gray-500 text-lg">Fax: +987654321</p>
                <p className="text-gray-500 text-lg">Email: Lopera@gmail.com</p>
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-medium mb-3">Hotel Location</h3>
                <p className="text-gray-500 text-lg">Address: Maldives</p>
                <p className="text-gray-500 text-lg">Telephone: +83868386</p>
                <p className="text-gray-500 text-lg">Fax: +0123987456</p>
                <p className="text-gray-500 text-lg">Email: hehe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;