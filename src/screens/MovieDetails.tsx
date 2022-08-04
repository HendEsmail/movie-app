import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootStackParamList} from '../navigation/navigator';
import {GetSearches} from '../store/actions/SearchesAction';
import {COLORS} from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export const MovieDetails = ({route}: Props) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    Actors: '',
    Awards: '',
    BoxOffice: '',
    Country: '',
    DVD: '',
    Director: '',
    Genre: '',
    Language: '',
    Metascore: '',
    Plot: '',
    Poster: '',
    Production: '',
    Rated: '',
    Ratings: [],
    Released: '',
    Response: '',
    Runtime: '',
    Title: '',
    Type: '',
    Website: '',
    Writer: '',
    Year: '',
    imdbID: '',
    imdbRating: '',
    imdbVotes: '',
  });
  useEffect(() => {
    dispatch(GetSearches(route.params.movie));
    axios
      .get(
        'http://www.omdbapi.com/?apikey=f2e9f4bd&type=movie&i=' +
          route.params.movie.imdbID,
      )
      .then(response => {
        console.log({'response.data': response.data});
        setMovie(response.data);
      });
  }, []);
  return (
    <>
      <StatusBar backgroundColor={COLORS.spaceCadet} />
      <View style={styles.top}>
        <Image
          style={styles.img}
          source={{
            uri: movie.Poster
              ? movie.Poster
              : 'https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=',
          }}
        />
        <View style={styles.TopContent}>
          <Text style={[styles.txt, {fontFamily: 'Roboto-Bold', fontSize: 20}]}>
            {movie.Title}
          </Text>
          <Text style={styles.txt}>
            {movie.Released}
            {'\n'}
            {movie.Genre}
            {'\n'}
            {movie.Runtime}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={[styles.top, {justifyContent: 'space-around'}]}>
          {movie.Ratings.map((r: {Source: string; Value: string}) => {
            return (
              <View style={styles.txtContainer} key={r.Source}>
                <View>
                  <Text style={styles.txtbold}>{r.Source}</Text>
                </View>
                <View style={{alignContent: 'center'}}>
                  <Text style={[styles.txt, {textAlign: 'center'}]}>
                    {r.Value}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={[styles.top, styles.last]}>
          <Text style={[styles.txtbold, {color: COLORS.white}]}>Summary</Text>
          <Text style={styles.txt}>{movie.Plot}</Text>
        </View>
        <View style={[styles.top, styles.last]}>
          <Text style={[styles.txtbold, {color: COLORS.white}]}>Director</Text>
          <Text style={styles.txt}>{movie.Director}</Text>
        </View>
        <View style={[styles.top, styles.last]}>
          <Text style={[styles.txtbold, {color: COLORS.white}]}>Actors</Text>
          <Text style={styles.txt}>{movie.Actors}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    alignSelf: 'stretch',
    padding: 20,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: COLORS.spaceCadet,
  },
  img: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.sun,
  },
  TopContent: {
    marginVertical: 22,
    justifyContent: 'space-around',
  },
  txtContainer: {
    alignContent: 'center',
    justifyContent: 'space-around',
    marginVertical: 22,
  },
  txt: {
    marginTop: 10,
    color: COLORS.white,
    fontFamily: 'Montserrat-Regular',
  },
  txtbold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: COLORS.sun,
  },
  last: {
    flexDirection: 'column',
    borderLeftColor: COLORS.sun,
    borderLeftWidth: 4,
  },
});
