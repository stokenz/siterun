import {
  Animated,
  Keyboard,
  TextInput,
  View,
  StyleSheet,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useInfiniteHits,
  useInstantSearch,
  useSearchBox,
} from "react-instantsearch";
import { useState, useRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SiteOutputDto } from "@/api/requests";

function Hit({
  hit,
  onPress,
}: {
  hit: SiteOutputDto;
  onPress: (hit: SiteOutputDto) => void;
}) {
  return (
    <TouchableOpacity style={styles.hit} onPress={() => onPress(hit)}>
      <Ionicons name="location" size={24} color="#666" />
      <Text>{hit.code}</Text>
      <Text>{hit.name}</Text>
    </TouchableOpacity>
  );
}

export default function SearchBar({
  onHitPress,
}: {
  onHitPress: (hit: SiteOutputDto) => void;
}) {
  const { query, refine } = useSearchBox();
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const { items, isLastPage, showMore } = useInfiniteHits<SiteOutputDto>({
    escapeHTML: false,
  });

  const safeAreaInsets = useSafeAreaInsets();

  const searchResultsAnim = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);

  const noResults = status === "idle" && items.length === 0;

  useEffect(() => {
    if (searchActive) {
      Animated.timing(searchResultsAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(searchResultsAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [searchActive]);

  function handleHitPress(hit: SiteOutputDto) {
    onHitPress(hit);
    setSearchActive(false);
    Keyboard.dismiss();
  }

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  // Track when the InstantSearch query changes to synchronize it with the React state.
  // Bypass the state update if the input is focused to avoid concurrent updates when typing.
  // From Algolia docs https://www.algolia.com/doc/guides/building-search-ui/going-further/native/react/#add-a-search-box
  if (query !== inputValue && !inputRef.current?.isFocused()) {
    setInputValue(query);
  }

  return (
    <View>
      <Animated.View
        style={[
          {
            paddingTop: safeAreaInsets.top + styles.searchContainer.top,
            backgroundColor: "white",
            opacity: searchResultsAnim,
          },
        ]}
      >
        <View style={styles.searchResults}>
          {noResults ? (
            <Text style={styles.noResults}>No results found</Text>
          ) : (
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={items}
              keyExtractor={(item) => item.objectID}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              onEndReached={() => {
                if (!isLastPage) {
                  showMore();
                }
              }}
              renderItem={({ item }) => (
                <Hit hit={item} onPress={handleHitPress} />
              )}
            />
          )}
        </View>
      </Animated.View>

      <View style={[styles.searchContainer, { top: safeAreaInsets.top }]}>
        <View style={styles.searchBar}>
          {searchActive ? (
            <Ionicons
              name="chevron-back"
              size={24}
              color="#666"
              style={styles.searchIcon}
              onPress={() => {
                setSearchActive(false);
                Keyboard.dismiss();
              }}
            />
          ) : (
            <Ionicons
              name="search"
              size={24}
              color="#666"
              style={styles.searchIcon}
            />
          )}
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Search sites..."
            value={inputValue}
            onChangeText={setQuery}
            placeholderTextColor="#666"
            onFocus={() => setSearchActive(true)}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            autoComplete="off"
          />
          {searchActive && query !== "" && (
            <Ionicons
              name="close"
              size={24}
              color="#666"
              style={styles.searchCloseIcon}
              onPress={() => {
                setQuery("");
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 18,
  },
  searchIcon: {
    paddingLeft: 15,
    marginRight: 10,
  },
  searchInput: {
    paddingRight: 15,
    flex: 1,
    width: "100%",
    height: "100%",
    fontSize: 16,
    color: "#333",
  },
  searchCloseIcon: {
    paddingRight: 15,
  },
  searchResults: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  noResults: {
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
