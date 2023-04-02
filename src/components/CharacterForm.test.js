import { fireEvent, render, screen } from "@testing-library/react";
import CharacterForm from "./CharacterForm";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "sez" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<CharacterForm />);
  const usernameInputEl = screen.getByLabelText(/name and surname/i);
  expect(usernameInputEl).toBeInTheDocument();
});

test("job input should be rendered", () => {
  render(<CharacterForm />);
  const jobInputEl = screen.getByLabelText(/job title/i);
  expect(jobInputEl).toBeInTheDocument();
});

test("avatar input should be rendered", () => {
  render(<CharacterForm />);
  const avatarInputEl = screen.getByLabelText(/avatar/i);
  expect(avatarInputEl).toBeInTheDocument();
});

test("description input should be rendered", () => {
  render(<CharacterForm />);
  const descriptionInputEl = screen.getByLabelText(/description/i);
  expect(descriptionInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<CharacterForm />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<CharacterForm />);
  const userInputEl = screen.getByLabelText(/name and surname/i);
  expect(userInputEl.value).toBe("");
});

test("job input should be empty", () => {
  render(<CharacterForm />);
  const jobInputEl = screen.getByLabelText(/job title/i);
  expect(jobInputEl.value).toBe("");
});

test("avatar input should be empty", () => {
  render(<CharacterForm />);
  const avatarInputEl = screen.getByLabelText(/avatar/i);
  expect(avatarInputEl.value).toBe("");
});

test("description input should be empty", () => {
  render(<CharacterForm />);
  const descriptionInputEl = screen.getByLabelText(/description/i);
  expect(descriptionInputEl.value).toBe("");
});

test("username input should be change", () => {
  render(<CharacterForm />);
  const usernameInputEl = screen.getByLabelText(/name and surname/i);
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("job input should be change", () => {
  render(<CharacterForm />);
  const jobInputEl = screen.getByLabelText(/job title/i);
  const testValue = "test";

  fireEvent.change(jobInputEl, { target: { value: testValue } });
  expect(jobInputEl.value).toBe(testValue);
});

test("avatar input should be change", () => {
  render(<CharacterForm />);
  const avatarInputEl = screen.getByLabelText(/avatar/i);
  const testValue = "test";

  fireEvent.change(avatarInputEl, { target: { value: testValue } });
  expect(avatarInputEl.value).toBe(testValue);
});

test("description input should be change", () => {
  render(<CharacterForm />);
  const descriptionInputEl = screen.getByLabelText(/description/i);
  const testValue = "test";

  fireEvent.change(descriptionInputEl, { target: { value: testValue } });
  expect(descriptionInputEl.value).toBe(testValue);
});

test("button should be rendered", () => {
  render(<CharacterForm />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByLabelText(/name and surname/i);
  const jobInputEl = screen.getByLabelText(/job title/i);
  const avatarInputEl = screen.getByLabelText(/avatar/i);
  const descriptionInputEl = screen.getByLabelText(/description/i);

  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(jobInputEl, { target: { value: testValue } });
  fireEvent.change(avatarInputEl, { target: { value: testValue } });
  fireEvent.change(descriptionInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});
