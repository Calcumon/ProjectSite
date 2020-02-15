import React from "react";
import "./styles.scss";

const Story: React.FC = () => {
  return (
    <div>
      <div className="quote">
        <blockquote>
          <span className="quoteBold">"Nearly 80% of learners</span> said they
          would be more productive if their learning or job was more game-like."
        </blockquote>
        <blockquote>
          From various gamification and engagement techniques, users indicated
          they prefer progressing to different levels, score tracking, real-time
          performance feedback, and activity feeds. The least loved elements
          were virtual currencies, avatars, competition with friends, virtual
          gifts, and being part of an "interactive fiction" narrative.
          <br />
          <br />
          <span className="quoteReference">
            -Talent LMS Gamification Survey
          </span>
        </blockquote>
      </div>

      <div className="story">
        <h1>WHY?</h1>
        <p>
          One casual weekend, my sister expressed to me that she was having a
          hard time in math class. As I rushed to leave for an appointment, I
          struggled to provide her the right practice, navigating through the
          web of worksheets on the web for math. This lead me to develop the
          first iteration of our app -- a problem-generator for various math
          topics.
          <br />
          <br />
          However, this was not enough. My younger siblings and their friends
          had repeatedly expressed concerns regarding self-motivation for
          completing worksheets for homework and external tutoring
          organizations. User interviewing kids and parents from elementary and
          middle school, confirmed this! Not only were kids struggling with this
          unpleasant experience, parents were also struggling to push their kids
          to complete these worksheets. I knew then that we had to make this an
          exciting tool to reshape the learning process.
          <br />
          <br />
          This was a mandatory problem for them. Learning math is part of the
          schooling process, and as higher education admissions becomes
          increasingly tough, more and more parents seem to seek external
          support for their kids. However, we know its hard for parents to fit
          these endeavors in their busy schedules, that a motivating and
          engaging learning tool can improve!
          <br />
          <br />
          &#8212; Anisha Jain, Founder
        </p>
      </div>
    </div>
  );
};

export default Story;
