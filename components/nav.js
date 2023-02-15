import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <>Home</>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <>About</>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog">
            <>Blog</>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
