import React from 'react';
import { Page, Text, Image, Document, StyleSheet, View, Font } from "@react-pdf/renderer";
import workshopBackground from "../public/img/Tiket-Workshop.jpg";
import talkshowBackground from "../public/img/Tiket-Talkshow.jpg";

Font.register({ family: 'Mortend', src: '../public/fonts/Mortend-Bold.ttf'});

const styles = StyleSheet.create({
  name: {fontFamily: 'Mortend', position:'absolute', left:"1915px", top:"355px"},
  noTicket: {fontFamily: 'Mortend', position:'absolute', left:"1978px", top:"500px"},
  image: {},
});

type Props = {
  name: string;
  noTicket: string;
  isWorkshop: boolean;
}

export default function Ticket({
  name,
  noTicket,
  isWorkshop
}:Props) {
  return(
    <Document>
      <Page size={[2646, 856]}>
        <View>
          <Text style={styles.name} fixed>{name}</Text>
          <Text style={styles.noTicket} fixed>{noTicket}</Text>
          <Image style={styles.image} src={workshopBackground.src}/>
        </View>
      </Page>
    </Document>
  )
}