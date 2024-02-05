import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Theme_Color1 } from '../Practis0cial/utils/Color';

const Demo = () => {
  const items = ['Aadharcard', 'Pancard', 'College Id', 'Driving Licene',];

  const firstFun = () => {
    const itemViews = [];
    for (let i = 0; i < items.length; i++) {
      itemViews.push(
        <View style={styles.item}>
          <Text>{items[i]}</Text>
        </View>
      );
    }
    return itemViews;
  };

  return (
    <View>
    <ScrollView horizontal style={styles.scrollView}>
      {firstFun()}
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  item: {
    padding: 16,
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
    width:200,
    height:200,
    justifyContent:'center',
    alignItems:"center"
  },

});

export default Demo;