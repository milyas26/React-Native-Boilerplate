import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from "twrnc";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={tw`px-4`}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ullam iusto minima voluptatum ab ipsum optio placeat id eaque
          molestias porro odio repellat expedita, asperiores, aut modi, dolore
          assumenda cum quod vitae dolor dicta sint delectus? In tempora
          praesentium, laudantium ipsum explicabo ullam soluta a blanditiis
          illum voluptates corporis nostrum sint vel doloribus laboriosam, totam
          temporibus eius, perspiciatis assumenda odit qui veritatis possimus
          porro modi? Modi, culpa? Molestias sunt architecto inventore nemo
          ducimus odio molestiae maiores officiis, tempore aspernatur quis, vero
          eius! Error alias laboriosam ut fugiat facere in, autem necessitatibus
          doloribus deserunt doloremque minus numquam voluptas ullam aspernatur
          similique cupiditate, pariatur rem. Tenetur, fugit. Velit consequatur
          omnis quas? Nam voluptas natus rerum asperiores sunt, numquam
          officiis. Doloremque animi sapiente aut ea laboriosam corporis ab
          deleniti voluptate nihil magnam veritatis explicabo deserunt delectus,
          illum sunt quod, ipsam minima. Tempora, ratione rerum illo quam ullam,
          nam perspiciatis ipsum inventore officia neque culpa magni nostrum
          molestiae doloribus reiciendis ad tempore nihil officiis delectus.
          Dolores tempora, quo deleniti ducimus tempore neque autem officia vero
          aliquam nam rem hic ullam, nesciunt labore quas ad dolorem molestiae
          omnis, sed itaque odio animi. Eius dolorem maxime asperiores nobis
          aliquam odit quidem ad consequuntur quia, in eaque!
        </Text>
        <Button onPress={() => navigation.navigate('Detail' as never)} title="Detail" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
