import React from 'react';
import { Text, ScrollView } from 'react-native';

//styles
import styles from './BottomSheetContainer.styles';

//components
import { CardAnswer } from '../../components';

//other deps
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheetContainer = ({ sheetRef, actions }) => {
	return (
		<RBSheet
			animationType='fade'
			ref={sheetRef}
			height={650}
			openDuration={600}
			closeDuration={100}
			closeOnDragDown={true}
			customStyles={{
				container: {
					backgroundColor: "#fff",
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
				},
				wrapper: {
					backgroundColor: '#7F808196',
				},
				draggableIcon: {
					backgroundColor: "#E3E3E3"
				}
			}}>

			<ScrollView
				disableScrollViewPanResponder={true}
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: 16 }}>

				<Text style={styles.title}>Почему витамины этой группы?</Text>

				{actions.map((action) => {
					return (
						<CardAnswer
							title={action.title}
							descripton={action.text} />
					)
				})}

			</ScrollView>
		</RBSheet>
	);
}

export default BottomSheetContainer;