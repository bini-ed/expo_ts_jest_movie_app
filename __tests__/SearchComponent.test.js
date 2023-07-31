jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react-native";
import { AppTextInput } from "../src/components/AppTextInput/AppTextInput";
import SearchComponent from "../src/screen/Search/Search.component";
import { searchMovies } from "../src/service/movie.service";

jest.mock("../src/service/movie.service", () => ({
  searchMovies: jest.fn(),
}));

describe("SearchComponent", () => {
  it("should call handleSearch when the button is pressed", async () => {
    const onChange = jest.fn();
    const handleSearch = jest.fn();
    render(
      <AppTextInput
        value="Cars"
        onChangeText={onChange}
        handleSearch={handleSearch}
      />
    );
    render(<SearchComponent />);
    const appTextInput = screen.getByTestId("input");
    const searchInput = within(appTextInput).getByTestId("inputField");
    const searchButton = within(appTextInput).getByTestId("searchBtn");

    fireEvent.changeText(searchInput, "Cars");
    fireEvent.press(searchButton);

    await waitFor(() => {
      expect(searchMovies).toHaveBeenCalledWith("Cars");
    });
  });
});
