

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  )
}
