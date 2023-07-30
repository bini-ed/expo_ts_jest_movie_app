jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
import React from "react";
import { render } from "@testing-library/react-native";
import { searchMovies } from "../src/service/movie.service";

import MovieCard from "../src/components/MovieCard";

it("should fetch the correct movie", async () => {
  const { data } = await searchMovies("cars");
  expect(data.results[0].title.toLowerCase()).toBe("cars");
});

describe("MovieCard", () => {
  it("should render successfully", () => {
    const { UNSAFE_root } = render(
      <MovieCard
        movies={{ original_title: "cars", poster_path: "/ab", id: 1 }}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
