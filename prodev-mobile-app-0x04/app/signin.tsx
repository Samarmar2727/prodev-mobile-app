import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '@/styles/_joinstyle'; 
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from '@/constants';
import { router } from 'expo-router';

export default function Signin() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} style={{ width: 50, height: 50 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back! Please sign in to your account.</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="you@example.com" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} placeholder="●●●●●●●" secureTextEntry />
          </View>
        </View>
      </View>

      <Text style={styles.forgotPasswordText}>Forgot password?</Text>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
