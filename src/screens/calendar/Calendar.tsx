import { StyleSheet, View, Text, Alert, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import { RootTabParamsList } from '../../navigation/tabNavigation/TabNavigation';
import { COLORS } from '../../constants/colors/colors';
import { Calendar } from 'react-native-calendars';
import { styles } from './CalendarStyle';
interface  calendarProps {
    navigation: BottomTabNavigationProp<RootTabParamsList, 'calendar'>;
  }

  type EventsType = {
    [key: string]: string[];
  };


export default function Calendars({navigation}: calendarProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState<EventsType>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const theme = {
    backgroundColor: COLORS.WHITE,
    calendarBackground: COLORS.WHITE,
    textSectionTitleColor: COLORS.TEXTSECONDARY,
    textSectionTitleDisabledColor: COLORS.TEXTSECONDARY,
    selectedDayBackgroundColor: COLORS.PRIMARY,
    selectedDayTextColor: COLORS.WHITE,
    todayTextColor: COLORS.SECONDARY,
    dayTextColor: COLORS.TEXTPRIMARY,
    textDisabledColor: COLORS.TEXTSECONDARY,
    dotColor: COLORS.PRIMARY,
    selectedDotColor: COLORS.WHITE,
    arrowColor: COLORS.SECONDARY,
    disabledArrowColor: COLORS.TEXTSECONDARY,
    monthTextColor: COLORS.PRIMARY,
    indicatorColor: COLORS.PRIMARY,
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const handleDayPress = (day:any) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = () => {
    if (newEvent.trim()) {
      setEvents({
        ...events,
        [selectedDate]: [...(events[selectedDate] || []), newEvent],
      });
      setNewEvent('');
      setModalVisible(false);
    } else {
      Alert.alert('Invalid Event', 'Event description cannot be empty.');
    }
  };

  const renderEventsForDate = (date:any) => {
    return events[date] ? (
      <View style={styles.eventsContainer}>
        {events[date].map((event: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <Text key={index} style={styles.eventText}>- {event}</Text>
        ))}
      </View>
    ) : null;
  };

  const renderAllEvents = () => {
    const allEvents = Object.keys(events).map((date) => {
      return (
        <View key={date} style={styles.eventItem}>
          <Text style={styles.eventDate}>{date}</Text>
          {events[date].map((event: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
            <Text key={index} style={styles.eventDescription}>- {event}</Text>
          ))}
        </View>
      );
    });
    return <ScrollView>{allEvents}</ScrollView>;
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-05-29'}
        minDate={'2020-05-10'}
        maxDate={'2025-05-30'}
        onDayPress={handleDayPress}
        monthFormat={'yyyy MM'}
        onMonthChange={(month: any) => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth: () => any) => subtractMonth()}
        onPressArrowRight={(addMonth: () => any) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        theme={theme}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: COLORS.PRIMARY };
            return acc;
          }, {}),
          [selectedDate]: {
            selected: true,
            selectedColor: COLORS.PRIMARY,
          },
        }}
      />
      {selectedDate && renderEventsForDate(selectedDate)}
      <Text style={styles.allEventsTitle}>All Events</Text>
      {renderAllEvents()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Event for {selectedDate}</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Event"
            value={newEvent}
            placeholderTextColor={'black'}
            onChangeText={setNewEvent}
          />
          <TouchableOpacity style={styles.addButton} onPress={addEvent}>
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


