import React from "react";

export default function MyModal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="inline-flex text-goldGolden bg-oxfordBlue border-1 py-2 px-6 focus:outline-none hover:bg-prussianBlue rounded text-lg fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="p-2 rounded">
        <p>
          I am a thought leader in the space of consumer experience technologies
          and design. Over the past twenty years, I've worked on a multitude of
          projects spanning numerous industries, leveraging my expertise in
          consumer transaction technologies, sales, marketing, and user
          research. I excel in analyzing and evaluating consumer engagements,
          executive communications, channel distribution optimization,
          understanding and capitalizing on multi-industry megatrends, and
          transformational change management. Proficient in the <p className="font-bold">MERN Stack;</p>
          flexible, fast learner bringing curiosity and passion to every
          project. My teammates would describe me as energetic, articulate, and
          personable. I like to think that I bring a confident demeanor to any
          situation and that I am able to seamlessly engage in a variety of
          realms. I have a passion for marrying the humanities and technology
          and working towards delivering experiences that are meaningful and
          personal. Away from professional life, I spend my time competing in
          professional gaming, drawing/graphic design, teaching self-defense,
          and training police officers. It is important that I give back to the
          community, so the rest of my free time is volunteering at non-profit
          associations and exploring new places.
        </p>
        <button onClick={onClose}>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./xclosewindowyellow.png"
          />
        </button>
      </div>
    </div>
  );
}
