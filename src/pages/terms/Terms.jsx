import React from 'react';
import website_name from '@/src/config/website.js';

function Terms() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-5">
      {/* Content */}
      <div className="space-y-12 text-white/60">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">Terms and Conditions of Use</h1>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">1. Terms</h2>
          <p className="leading-relaxed text-base">
            By accessing this Website, accessible from https://justanime.to, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">2. Use License</h2>
          <p className="leading-relaxed text-base mb-4">
            Permission is granted to temporarily download one copy of the materials on {website_name}'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on {website_name}'s Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p className="leading-relaxed text-base mt-4">
            This will let {website_name} to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
          <p className="leading-relaxed text-base">
            All the materials on {website_name}'s Website are provided "as is". {website_name} makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, {website_name} does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">4. Limitations</h2>
          <p className="leading-relaxed text-base">
            {website_name} or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on {website_name}'s Website, even if {website_name} or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">5. Revisions and Errata</h2>
          <p className="leading-relaxed text-base">
            The materials appearing on {website_name}'s Website may include technical, typographical, or photographic errors. {website_name} will not promise that any of the materials in this Website are accurate, complete, or current. {website_name} may change the materials contained on its Website at any time without notice. {website_name} does not make any commitment to update the materials.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">6. Links</h2>
          <p className="leading-relaxed text-base">
            {website_name} has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by {website_name} of the site. The use of any linked website is at the user's own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">7. Site Terms of Use Modifications</h2>
          <p className="leading-relaxed text-base">
            {website_name} may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">8. Your Privacy</h2>
          <p className="leading-relaxed text-base">
            Please read our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law</h2>
          <p className="leading-relaxed text-base">
            Any claim related to {website_name}'s Website shall be governed by the laws of bq without regards to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms; 