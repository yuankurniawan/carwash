import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Bubble } from 'react-native-gifted-chat'

const back = <Icon name="arrowleft" size={28} color="black" />;
const profile = <Icon2 name="ios-person-circle-outline" size={46} color='#00A7E1' />;

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []); 

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return(
      <Bubble
      { ... props}
      wrapperStyle={{
        right: {
          backgroundColor: '#00A7E1'
        },
        left: {
          backgroundColor: '#C6C2C6'
        }
      }}
      textStyle={{
        right: {
          color: 'black'
        }
      }}
    />
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, flexDirection: 'row'}}>
        {back}
        <Text style={{fontSize: 24, marginRight: 170}}>Hendra</Text>
        {profile}
      </View>
      <View style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          renderAvatar={null}
          renderBubble={renderBubble}
          user={{
            _id: 1,
          }}
        />
      </View>
    </View>
  );
}
