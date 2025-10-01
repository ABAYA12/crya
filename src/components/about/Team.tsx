'use client'

export default function Team() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="text-gradient block">Leadership Team</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our diverse team of passionate young leaders brings together expertise from 
            various fields, united by a shared commitment to African youth empowerment.
          </p>

          {/* Placeholder for team members */}
          <div className="bg-white rounded-2xl p-12 border-2 border-dashed border-gray-300">
            <div className="text-gray-500 text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Team Profiles Coming Soon</h3>
              <p className="max-w-md mx-auto">
                We're preparing detailed profiles of our leadership team and key contributors. 
                Check back soon to meet the faces behind CRYA's impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}