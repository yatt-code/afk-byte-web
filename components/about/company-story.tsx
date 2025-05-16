export function CompanyStory() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, AFK Byte began with a simple mission: to help businesses harness the power of technology to grow and thrive in an increasingly digital world.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a full-service IT consultancy with expertise across web development, software engineering, cloud services, and strategic IT consulting.
              </p>
              <p>
                Over the years, we've partnered with businesses of all sizes, from startups to established enterprises, helping them navigate the complex technological landscape and implement solutions that drive real business value.
              </p>
              <p>
                Our name, "AFK Byte," represents our dedication to being present and engaged with our clients (never "Away From Keyboard") while delivering byte-sized solutions that make a significant impact.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg blur-3xl" />
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AFK Byte team" 
              className="rounded-lg shadow-lg relative z-10 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}