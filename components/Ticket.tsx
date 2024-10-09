import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import workshopBackground from "../public/img/Tiket-Workshop.jpg";
import talkshowBackground from "../public/img/Tiket-Talkshow.jpg";

Font.register({ family: "Mortend", src: "/fonts/Mortend-Bold.ttf" });

const styles = StyleSheet.create({
  name: {
    fontFamily: "Mortend",
    position: "absolute",
    right: "30px",
    bottom: "101px",
    fontSize: "6pt",
    textAlign: "left",
    width: "130px",
  },
  noTicket: {
    fontFamily: "Mortend",
    position: "absolute",
    right: "30px",
    bottom: "70px",
    fontSize: "6pt",
    textAlign: "left",
    width: "120px",
  },
  images: {},
});

type Props = {
  name: string;
  noTicket: string;
  isWorkshop: boolean;
};

export default function Ticket({ name, noTicket, isWorkshop }: Props) {
  function handleName() {
    if (name.length > 27) return name.slice(0, 27);

    return name;
  }

  function handleNo() {
    if (noTicket.length > 22) return noTicket.slice(0, 22);

    return noTicket;
  }

  return (
    <Document>
      <Page wrap={false}>
        <View>
          <Image
            style={styles.images}
            src={isWorkshop ? workshopBackground.src : talkshowBackground.src}
          />
          <Text style={styles.name} fixed>
            {handleName()}
          </Text>
          <Text style={styles.noTicket} fixed>
            {handleNo()}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
function rotate(arg0: number, deg: any): any {
  throw new Error("Function not implemented.");
}
