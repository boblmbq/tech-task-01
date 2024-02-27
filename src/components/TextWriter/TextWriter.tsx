import { Text, TextWriterContainer } from './TextWriter.styled';

function TextWriter({ words }: { words: string }) {
	return (
		<TextWriterContainer>
			<Text>{words}</Text>
		</TextWriterContainer>
	);
}

export default TextWriter;
