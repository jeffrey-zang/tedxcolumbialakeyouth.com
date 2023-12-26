const contactData = [
  {
    title: "Business Opportunities",
    email: "business@tedxcolumbialakeyouth.com",
  },
  {
    title: "Questions and Inquiries",
    email: "questions@tedxcolumbialakeyouth.com",
  },
  {
    title: "Marketing Opportunities",
    email: "marketing@tedxcolumbialakeyouth.com",
  },
  {
    title: "Community Involvement",
    email: "community@tedxcolumbialakeyouth.com",
  },
];

const Contact = () => {
  return (
    <div>
      <div className="section typography !max-w-[70rem] mt-[10rem]">
        <div className="section-wrapper text-center w-full">
          <h2>Contact Us</h2>
          <p>
            Have questions? Want to explore a partnership opportunity? Use the
            links below to shoot us an email!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {contactData.map((contact) => {
              return (
                <div
                  className="contact-container"
                  onClick={() => {
                    window.open(`mailto:${contact.email}`);
                  }}
                >
                  <h3>{contact.title}</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className='section typography mt-[10rem] !max-w-[60rem] mb-[8rem]'>
        <div className='section-wrapper'>
          <h2 className='text-center'><a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Registrations</a> Open Now!</h2>
          <p className='text-center'>Want to get inspired or make an impact on the youth innovators of the future? <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Participate in the event</a> as a speaker or attendee and keep in touch through our <a href='https://www.instagram.com/ted<sup>x</sup>columbialakeyouth/'>Instagram</a>. Register <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>here</a>!</p>
        </div>
      </div> */}

    </div>
  )
}

export default Contact