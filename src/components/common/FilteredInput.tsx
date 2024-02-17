import React, { FC } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { colors, fontSizes } from "../../styles/theme";

interface FilteredInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  inputRef: any;
}

export const FilteredInput: FC<FilteredInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  inputRef,
  onSubmitEditing,
}) => {
  //const inputRef = useRef<TextInput>(null);

  const handleInput = (text: string) => {
    const filteredValue = text.replace(/[^0-9,.]/g, "");
    onChangeText(filteredValue);

    if (inputRef.current) {
      inputRef.current.setNativeProps({ text: filteredValue });
    }
  };

  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      value={value}
      onChangeText={handleInput}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={colors.primary}
      returnKeyType={"next"}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    fontSize: fontSizes.md,
  },
});
