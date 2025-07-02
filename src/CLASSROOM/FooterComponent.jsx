const FooterComponent = () => {
  return (
    <>
    <footer className="footer bg-dark text-white text-center">
      <div className="container py-3">
        <span>© {new Date().getFullYear()} Casper. All rights reserved.</span>
      </div>
    </footer>
    </>
  )
}

export default FooterComponent