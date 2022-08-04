import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../theme/colors';

import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {GetSearches} from '../store/actions/SearchesAction';

interface props {
  GetMovies: (movies: []) => void;
  Pages: number;
}
export const Search = ({GetMovies, Pages}: props) => {
  const [searchVal, setSearchVal] = useState('');
  const [inVal, setinVal] = useState('');

  const data = useSelector((state: any) => state.SearchesReducer);

  console.log(data);
  useEffect(() => {
    setinVal('');
  }, []);
  useEffect(() => {
    console.log({searchVal});
    searchVal.trim().length == 0
      ? GetMovies(data as [])
      : axios
          .get(
            `http://www.omdbapi.com/?apikey=f2e9f4bd&type=movie&s=${searchVal}&page=${Pages}`,
          )
          .then(response => {
            console.log('data', response);
            GetMovies(response.data.Search);
          })
          .catch(err => {
            console.log('err', err);
          });
  }, [searchVal, Pages]);

  // const dispatch=useDispatch();
  const FetchMovies = (movTitle: string) => {
    setSearchVal(movTitle);
    console.log('////////////');
    console.log(data);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.Input}
          placeholder="Enter Movie Name ..."
          onChangeText={FetchMovies}
          placeholderTextColor={COLORS.sun}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => FetchMovies}>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 20,
              color: COLORS.sun,
            }}>
            <Icon name="magnifying-glass" size={30} color={COLORS.sun} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Input: {
    flex: 1,
    borderRightColor: COLORS.sun,
    backgroundColor: COLORS.spaceCadet,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 2,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
    fontSize: 15,
  },
  btn: {
    backgroundColor: COLORS.cloudBurst,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 70,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
  },
});
