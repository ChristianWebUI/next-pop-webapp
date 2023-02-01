export default function Footer() {
  return (
    <footer className="flex h-10 justify-center items-center shadow-inner">
      <p>{`Copyright © ${new Date().getFullYear()} P de Papel`}</p>
    </footer>
  )
}
