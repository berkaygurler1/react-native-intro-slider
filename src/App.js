import React, {useState} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from './components/constants/theme';

const slides = [
  {
    id: 1,
    title: "Yazılım Stüdyo'ya Hoşgeldin! ",
    description: "A'dan Z'ye Yazılıma Dair Her şeyi öğreneceksin!",
    image: require('./components/images/hercules.png'),
  },
  {
    id: 2,
    title: 'Motivasyona İhtiyacın Var',
    description:
      'Yazılımın Temeli Tabikide Motivasyon!     Asla Motiveni Bozma ',
    image: require('./components/images/alaaddin.png'),
  },
  {
    id: 3,
    title: 'Sen En iyisisin!',
    description:
      'Neredeyse Tüm Dilleri Kapsıyoruz              Hadi Katılsana Bize!',
    image: require('./components/images/kangsae.png'),
  },
];

export default function App() {
  const [showHomePage, setShowhomePage] = useState(false);

  const buttonLabel = label => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: SIZES.h3,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 200,
                backgroundColor: '#010b16',
              }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 140,
                  height: 300,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  paddingTop: 50,
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: SIZES.h1,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: 'white',
                  fontSize: SIZES.h3,
                }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: 'white',
          width: 38,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('İlerle')}
        renderSkipButton={() => buttonLabel('GEÇ')}
        renderDoneButton={() => buttonLabel('BAŞLA')}
        onDone={() => {
          setShowhomePage(true);
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 80,
          color: '#d1d1d1',
        }}>
        HOME
      </Text>
    </View>
  );
}



