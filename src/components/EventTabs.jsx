import React from "react";
import { Menu, Sticky } from "semantic-ui-react";
import EventMinutes from "./EventMinutes";
import EventTranscript from "./EventTranscript";
import VotingTable from "./VotingTable";
import styled from "@emotion/styled";

const StyledEventTabs = styled.div({
  margin: "1em 0",
  width: "100%",
  fontSize: "16px",
  lineHeight: "1.5",
  "a.item": {
    fontSize: "1.3em !important"
  }
});

const StyledEventMenu = styled(Menu)({
  borderBottom: "0 !important",
  marginBottom: "1em !important",
  paddingTop: "1em !important",
  backgroundColor: "white !important",
  zIndex: "0 !important",
  width: "100%"
});

const EventTabs = ({
  minutes,
  scPageUrl,
  transcript,
  votes,
  handleSeek,
  topOffset,
  mediaQueriesMatches
}) => {
  // Which menu item is visible
  const [activeItem, setActiveItem] = React.useState("details");
  // A React reference to StyledEventTabs
  const contextRef = React.useRef(null);

  // Callback to handle menu item click event
  const handleItemClick = (e, { name }) => {
    const domRect = contextRef.current.getBoundingClientRect();
    if (domRect.top < 0) {
      // If the top of contextRef is not visible, scroll so that the top of contextRef
      // is aligned with the top of viewport.
      contextRef.current.scrollIntoView(true);
      if (!mediaQueriesMatches) {
        // This is the case where video is fixed to the top and Menu is below the video.
        // Need to scroll upward by video's height so that the, for example, first minute is visible
        // below the menu.
        window.scrollBy(0, -topOffset);
      }
    }
    setActiveItem(name);
  };

  return (
    <StyledEventTabs ref={contextRef}>
      <Sticky
        context={contextRef}
        offset={topOffset}
        styleElement={{ zIndex: "1" }}
      >
        <StyledEventMenu secondary pointing>
          <Menu.Item active={activeItem === "details"} name="details" onClick={handleItemClick} />
          <Menu.Item active={activeItem === "transcript"} name="transcript" onClick={handleItemClick} />
          <Menu.Item active={activeItem === "votes"} name="votes" onClick={handleItemClick} />
        </StyledEventMenu>
      </Sticky>
      {{
        details: <EventMinutes minutes={minutes} scPageUrl={scPageUrl} />,
        transcript: <EventTranscript
          handleSeek={handleSeek}
          transcript={transcript}
        />,
        votes: votes.length ? <VotingTable votingData={votes} /> : <div>No votes found for this event.</div>
      }[activeItem]}
    </StyledEventTabs>
  );
};

export default React.memo(EventTabs);
