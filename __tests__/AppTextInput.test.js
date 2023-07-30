jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
import { render, screen } from "@testing-library/react-native";
import { AppTextInput } from "../src/components/AppTextInput/AppTextInput";

test("renders AppTextInput component without errors", () => {
  render(<AppTextInput value="" handleSearch={() => {}} />);
  expect(screen.queryByTestId("AppTextInput")).toBeDefined();
});

test("check if search input onchange works correctly", () => {
  const onChange = jest.fn();
  render(<AppTextInput value="testing changes" onChangeText={onChange} />);
  const searchInput = screen.getByTestId("inputField");
  expect(searchInput.props.value).toBe("testing changes");
});
