'use client'
import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <section id="not-found">
      <div className="absolute w-full h-screen overflow-hidden left-0 top-0 bg-night after:bg-night-after after:content-[''] after:w-full after:h-full after:absolute after:top-0">
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-1"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
        <div className="star-2"></div>
      </div>
      <div className="absolute w-full h-screen overflow-hidden left-0 top-0 container-bird">
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="bird bird-anim">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>
            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>
        </div>
        <div className="container-title">
          <div className="title">
            <div className="number">4</div>
            <div className="moon">
              <div className="face">
                <div className="mouth"></div>
                <div className="eyes">
                  <div className="eye-left"></div>
                  <div className="eye-right"></div>
                </div>
              </div>
            </div>
            <div className="number">4</div>
          </div>
          <div className="subtitle">Oops. Looks like you took a wrong turn</div>
          <button
            type="submit"
            onClick={() => {
              window.location.href = '/'
            }}
          >
            Go to{' '}
            <Image
              src="/logos/text-below-transparent-bg.webp"
              alt="p de papel logo"
              width={4000}
              height={2000}
              priority
              quality={100}
              sizes="100vw"
              className="w-32 h-32"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
