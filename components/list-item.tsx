import { Note, Mail, InboxItem } from "structs";
import { View, TouchableOpacity } from "react-native";
import { Box, Text } from "../atoms";

export interface Props extends InboxItem {
  onPress?: (refId: string) => void;
}

export const ListItem: React.FC<Props> = (props) => {
  const { onPress, id, preview, dateCreated, subject, sender, recipient } = props;
  return (
    <Box bg="$background" p={"xs"}>
      <Box>
        <Text fontSize={12} fontWeight={"bold"}>
          {subject}
        </Text>
        <Text color={"$graySecondary"} fontSize={11}>
          {preview}
        </Text>
      </Box>
    </Box>
  );
};
