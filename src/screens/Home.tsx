import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Title} from '../components/Title';
import {MovieItem} from '../components/MovieItem';
import {Search} from '../components/Search';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../navigation/navigator';
import {COLORS} from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: Props) => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pages, setpages] = useState(1);

  // const dispatch =useDispatch();
  const GetMovies = (movies: []) => {
    console.log('MOVIES', movies);
    setmovies(movies);
  };

  const renderMovies = useCallback(() => {
    return !movies ? (
      <View>
        <Text style={{color: COLORS.white}}>no movies</Text>
      </View>
    ) : (
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MovieDetails', {movie: item});
            }}>
            <MovieItem data={item} />
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator size="large" color="Red" />
          </View>
        )}
        onEndReached={() => setpages(pages + 1)}
        onEndReachedThreshold={0.5}
      />
    );
  }, [movies]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0B132B" />
      <Search GetMovies={GetMovies} Pages={pages} />
      <Title />
      <View style={{flex: 1}}>{renderMovies()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: '#0B132B',
    flex: 1,
  },
});
