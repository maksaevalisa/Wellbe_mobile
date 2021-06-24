import React from 'react';
import { Text, View, Image } from 'react-native';

//styles
import styles from './InfoCard.styles';

const InfoCard = (props) => {
	return (
		<View style={[styles.container, props.style]}>
			<Text style={styles.title}>{props.title}</Text>

			<View style={[styles.content, { marginBottom: 16 }]}>
				<Image source={props.imageUrlFirst} style={styles.image} />
				<Text style={styles.description}>{props.descriptionFirst}</Text>
			</View>

			<View style={styles.content}>
				<Image source={props.imageUrlSecond} style={styles.image} />
				<Text style={styles.description}>{props.descriptionSecond}</Text>
			</View>
		</View>
	)
};

export default InfoCard;