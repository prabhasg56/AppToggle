import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import axios from 'axios';

import AppToggleItem from '../../components/profile/AppToggleItem';
import SearchBox from '../../components/common/SearchBox';
import Loader from '../../components/common/Loader';
import { PUBLIC_URL } from '../../services/api';

const AppToggleScreen = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(PUBLIC_URL);
      const list = response.data.data?.app_list || [];
      setApps(list);
      setFilteredApps(list);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = apps.filter((app) =>
      app.app_name.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredApps(filtered);
  };

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  const toggleApp = (id) => {
    const updated = filteredApps.map((app) =>
      app.app_id === id ? { ...app, is_enable: !app.is_enable } : app
    );
    setFilteredApps(updated);
    setApps((prev) =>
      prev.map((app) =>
        app.app_id === id ? { ...app, is_enable: !app.is_enable } : app
      )
    );
  };

  const renderItem = useCallback(
    ({ item }) => <AppToggleItem item={item} onToggle={() => toggleApp(item.app_id)} />,
    [filteredApps]
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <SearchBox value={search} onChangeText={handleSearch} />
      <FlatList
        data={filteredApps}
        keyExtractor={(item) => item.app_id.toString()}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={15}
        windowSize={21}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default AppToggleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
