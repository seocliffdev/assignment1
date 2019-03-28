import React, { Component } from 'react';
import Props from './Props';
import Props1 from './Props1';
import State from './State';
import Style from './Style';
import HeightnWidth from './HeightnWidth';
import HeightnWidth1 from './HeightnWidth1';
import Flexbox from './Flexbox';
import Flexbox1 from './Flexbox1';
import Flexbox2 from './Flexbox2';
import TextInput from './TextInput';
import Touchable from './Touchable';
import Touchable1 from './Touchable1';
import ScrollView1 from './ScrollView';
import ListView from './ListView';
import SectionList from './SectionList';
import FetchAPI from './FetchAPI';



import { AppRegistry, ScrollView, Image, Text, StyleSheet,View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={styles.textBlock}>Props :: Part1</Text>
            <Props/>
          <Text>    {'\n\n\n'} </Text>
          <Text style={styles.textBlock}>Prop :: Part2</Text>
            <Props1/>
            <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>State</Text>
          <View style={{height:100}}>
            <State st yle={{height:100 }}/>
          </View>
          <Text>    {'\n\n\n'} </Text>
    
                  
          <Text style={styles.textBlock}>Style</Text>
          <Style/>
          <Text>    {'\n\n\n'} </Text>
        
          <Text style={styles.textBlock}>Height and Width :: Part 1</Text>
          <HeightnWidth/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>Height and Width :: Part 2</Text>
          <HeightnWidth1/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>Flexbox :: Part 1</Text>
          <Flexbox/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>Flexbox :: Part 2</Text>
          <Flexbox1/>
          <Text>    {'\n\n\n'} </Text>

          
          <Text style={styles.textBlock}>Flexbox :: Part 3</Text>
          <Flexbox2/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>TextInput</Text>
          <TextInput/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>Touchable :: Part 1</Text>
          <Touchable/>
          <Text>    {'\n\n\n'} </Text>

          <Text style={styles.textBlock}>Touchable :: Part 2</Text>
          <Touchable1/>
          <Text>    {'\n\n\n'} </Text>

          
          <Text style={styles.textBlock}>Scroll View</Text>
          <ScrollView1/>
          <Text>    {'\n\n\n'} </Text>

          
          <Text style={styles.textBlock}>List View</Text>
          <ListView/>
          <Text>    {'\n\n\n'} </Text>


          <Text style={styles.textBlock}>Section List</Text>
          <SectionList/>
          <Text>    {'\n\n\n'} </Text>


          <Text style={styles.textBlock}>Fetch API</Text>
          <FetchAPI/>
          <Text>    {'\n\n\n'} </Text>


         
         

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textBlock: {
  display:"flex",fontSize:20, height:40, textAlignVertical:"center",textAlign:"center", fontWeight:"bold", backgroundColor:'aquamarine',borderTopColor:'#f0f', borderBottomColor: '#f0f'
  }
})


