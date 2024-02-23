import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormikWrapper = styled.div`
	width: 100%;
	height: auto;
`;

export const FormStyled = styled(Form)`
	display: flex;
	width: 100%;
	height: 100%;
	gap: 18px;
	align-items: end;
	justify-content: center;
`;

export const LabelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	height: 100%;
`;

export const LabelStyled = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: auto;
	padding: 0 14px;
	background: #f7f7fb;
	border-radius: 14px;
`;

export const FieldStyled = styled(Field)`
	border: none;
	background: transparent;
	width: 90%;

	font-weight: 500;
	font-size: 18px;
	text-wrap: nowrap;
	line-height: 1.11;
	color: #121417;
`;

export const ExplanationFieldText = styled.p`
	font-weight: 500;
	font-size: 18px;
	text-wrap: nowrap;
	line-height: 1.11;
	margin-right: 5px;
	color: #121417;
`;

export const LabelDescription = styled.p`
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 14px;
	line-height: 1.3;
	color: #8a8a89;
`;

export const MileageLabelWrapper = styled.div`
	display: flex;
	width: 320px;
`;

export const MileageFromLabel = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 49%;
	padding: 0 14px;
	background: #f7f7fb;
	border-right: 1px solid black;
	border-radius: 14px 0 0 14px;
`;

export const MileageToLabel = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 50%;
	padding: 0 14px;
	background: #f7f7fb;
	border-radius: 0 14px 14px 0;
`;

export const SubmitButton = styled.button`
	border-radius: 12px;
	padding: 14px 44px;
	width: 136px;
	height: 48px;
`;
