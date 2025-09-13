import React from 'react';

interface GoogleCalendarEmbedProps {
  calendarSrc: string; // The calendar src URL from Google
  title?: string;
  height?: string;
}

const GoogleCalendarEmbed: React.FC<GoogleCalendarEmbedProps> = ({
  calendarSrc,
  title = 'Google Calendar',
  height = '600',
}) => {
  return (
    <div style={{ border: 0 }}>
      <iframe
        title={title}
        src={calendarSrc}
        style={{ border: 0, width: '100%', height }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default GoogleCalendarEmbed;