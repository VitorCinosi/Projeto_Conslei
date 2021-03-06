/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';



//import {Text} from 'react-native';
import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon,


} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [coords, setCoords] = useState(null);

    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [list, setList] = useState([]);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (result === 'granted') {

            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info) =>{
                setCoords(info.coords);
                getLeitos();
            });

        }
    };

    const getLeitos = async () => {

    };

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberofLines={2}>Encontre o seu Hospital</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#000" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                    placeholder="Onde voc?? est???"
                    placeholderTextColor="#000"
                    value={locationText}
                    onChangeText={t=>setLocationText(t)}
                     />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#000" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                <LoadingIcon size="large" color="#000" />
                }

            </Scroller>
        </Container>
    );
};
