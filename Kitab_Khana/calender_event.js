$(document).ready(function() {
    var calendar = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: [
        {
          title: 'Event 1',
          start: '2024-02-26T10:00:00',
          end: '2024-02-26T12:00:00'
        },
        {
          title: 'Event 2',
          start: '2024-02-28T14:00:00',
          end: '2024-02-28T16:00:00'
        }
        // Add more events as needed
      ]
    });
  
    $('#addEventBtn').on('click', function() {
      var title = prompt('Enter event title:');
      if (title) {
        calendar.fullCalendar('renderEvent', {
          title: title,
          start: moment(),
          allDay: true
        }, true);
      }
    });
  
    $('#deleteEventBtn').on('click', function() {
      var event = calendar.fullCalendar('clientEvents', function(event) {
        return event.selected;
      });
  
      if (event && confirm('Are you sure you want to delete this event?')) {
        calendar.fullCalendar('removeEvents', event.id);
      }
    });
  });
  