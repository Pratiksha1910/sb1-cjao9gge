import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Calculator } from "./Calculator";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Calculator"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1F2937",
                },
                headerTintColor: "#fff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Calculator"
                component={Calculator}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);