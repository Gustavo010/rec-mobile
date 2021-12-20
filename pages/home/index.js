import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'

export default function Home({ navigation }) {

    const [lista, setlista] = useState([])

    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon", {

            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {

            return resp.json()

        }).then(data => {

            setlista(data.results)

        }).catch(err => {

        })

    }, [])

    return (

        <View  style={style.pag}>

            {
                lista.map((item, index) =>
                    <TouchableOpacity key={index} style={style.menu} onPress={() => { navigation.navigate('Detalhes', item) }}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            }

        </View>

    )

}