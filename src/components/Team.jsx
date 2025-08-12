import React, { useState, useEffect } from 'react'
import './Team.css'

const Team = () => {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading team members
    setTimeout(() => {
      setTeam([
        {
          id: 1,
          name: "PhD. Duc-Ly Vu",
          role: "---",
          expertise: "Duc-Ly is an expert in cybersecurity and software security. He obtained his PhD in Computer Science from the University of Trento, Italy.",
          email: "---"
        },
        {
          id: 2,
          name: "PhD. Phạm Đại Xuân",
          role: "---",
          expertise: "Doctor of Computer Science, Sungkyunkwan University, South Korea. Master of Computer Science, University of Natural Sciences, VNU - TP. HCM Computer engineering engineer, Polytechnic University, VNU - TP. HCM",
          email: "---"
        },
        {
          id: 3,
          name: "PhD. Samarjit Roy",
          role: "---",
          expertise: "Postdoc at the Informatics and Computer Center, RuĐer Bošković, Zagreb, Croatia Doctor of Science and Technology, Tay Bengal University, Kolkata, India Master of Technology (M. Tech) on Information Technology, Manipal Institute of Technology, India Bachelor of Technology (B. Tech) on Information Technology, Gcelt, Wbut, Kolkata, India",
          email: "---"
        },
        {
          id: 4,
          name: "B.Eng. Nguyễn Hoàng Lý",
          role: "Teaching Assistant - member",
          expertise: "NLP",
          email: "ly.nguyen@eiu.edu.vn"
        }
      ])
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        
        {loading ? (
          <div className="loading">Loading team members...</div>
        ) : (
          <div className="team-grid">
            {team.map(member => (
              <div key={member.id} className="team-card">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-expertise">{member.expertise}</p>
                <a href={`mailto:${member.email}`} className="member-email">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Team
