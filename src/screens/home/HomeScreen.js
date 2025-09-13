import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Pressable,
  Modal,
  BackHandler,
  Linking,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../../styles/GlobalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, PERCENTAGE, SIZES, WEIGHT, IMAGES} from '../../constants/theme';
import PageLoader from '../../component/PageLoader';
import NetworkInfo from '../../component/NetworkInfo';
import UpdateApp from '../../component/UpdateApp';
import DefaultHeader from '../../component/DefaultHeader';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

export default function HomeScreen({navigation, props}) {
  const [loading, setLoading] = useState(false);
   const [loadHome, setLoadHome] = useState(false);
  const [networkAvail, setNetworkAvail] = useState(false);
  const [showForceUpdate, setShowForceUpdate] = useState(false);

  const [farmerName, setFarmerName] = useState('');
  const [product, setProduct] = useState('');
  const [villageName, setVillageName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [state, setState] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(()=>{
   if (quantity && price) {
     const total= parseFloat(quantity)*parseFloat(price);
     setAmount(total.toString());
   } else {
    setAmount('')
   }
  },[quantity,price])

  const [productVisible, setProductVisible] = useState(false);
  const [districtVisible, setDistrictVisible] = useState(false);

  // const productOptions = ['Onion', 'Garlic', 'Soybean', 'Wheat'];
  const [openProduct, setOpenProduct] = useState(false);
  const [productNames, setProductNames] = useState(null);
  const [productOptions, setProductOptions] = useState([
    {label: 'Onion', value: 'Onion'},
    {label: 'Garlic', value: 'Garlic'},
    {label: 'Soybean', value: 'Soybean'},
    {label: 'Wheat', value: 'Wheat'},
  ]);

  const [openDistrict, setOpenDistrict] = useState(false);
  const [districtNames, setDistrictNames] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([
    {label: 'Agar Malwa', value: 'Agar Malwa'},
    {label: 'Alirajpur', value: 'Alirajpur'},
    {label: 'Anuppur', value: 'Anuppur'},
    {label: 'Ashoknagar', value: 'Ashoknagar'},
    {label: 'Balaghat', value: 'Balaghat'},
    {label: 'Barwani', value: 'Barwani'},
    {label: 'Betul', value: 'Betul'},
    {label: 'Bhind', value: 'Bhind'},
    {label: 'Bhopal', value: 'Bhopal'},
    {label: 'Burhanpur', value: 'Burhanpur'},
    {label: 'Chhatarpur', value: 'Chhatarpur'},
    {label: 'Chhindwara', value: 'Chhindwara'},
    {label: 'Damoh', value: 'Damoh'},
    {label: 'Datia', value: 'Datia'},
    {label: 'Dewas', value: 'Dewas'},
    {label: 'Dhar', value: 'Dhar'},
    {label: 'Dindori', value: 'Dindori'},
    {label: 'Guna', value: 'Guna'},
    {label: 'Gwalior', value: 'Gwalior'},
    {label: 'Harda', value: 'Harda'},
    {label: 'Hoshangabad', value: 'Hoshangabad'},
    {label: 'Indore', value: 'Indore'},
    {label: 'Jabalpur', value: 'Jabalpur'},
    {label: 'Jhabua', value: 'Jhabua'},
    {label: 'Katni', value: 'Katni'},
    {label: 'Khandwa', value: 'Khandwa'},
    {label: 'Khargone', value: 'Khargone'},
    {label: 'Mandla', value: 'Mandla'},
    {label: 'Mandsaur', value: 'Mandsaur'},
    {label: 'Morena', value: 'Morena'},
    {label: 'Narsinghpur', value: 'Narsinghpur'},
    {label: 'Neemuch', value: 'Neemuch'},
    {label: 'Niwari', value: 'Niwari'},
    {label: 'Panna', value: 'Panna'},
    {label: 'Raisen', value: 'Raisen'},
    {label: 'Rajgarh', value: 'Rajgarh'},
    {label: 'Ratlam', value: 'Ratlam'},
    {label: 'Rewa', value: 'Rewa'},
    {label: 'Sagar', value: 'Sagar'},
    {label: 'Satna', value: 'Satna'},
    {label: 'Sehore', value: 'Sehore'},
    {label: 'Seoni', value: 'Seoni'},
    {label: 'Shahdol', value: 'Shahdol'},
    {label: 'Shajapur', value: 'Shajapur'},
    {label: 'Sheopur', value: 'Sheopur'},
    {label: 'Shivpuri', value: 'Shivpuri'},
    {label: 'Sidhi', value: 'Sidhi'},
    {label: 'Singrauli', value: 'Singrauli'},
    {label: 'Tikamgarh', value: 'Tikamgarh'},
    {label: 'Ujjain', value: 'Ujjain'},
    {label: 'Umaria', value: 'Umaria'},
    {label: 'Vidisha', value: 'Vidisha'},
  ]);

  // const villageOptions = ['Amleta', 'Namli', 'Bangrod', 'Dhonswas'];
  const allFills =
    farmerName &&
    productNames &&
    villageName &&
    districtNames &&
    contactNo &&
    quantity &&
    price &&
    amount;

  const closeNetWorkInfo = () => {
    setNetworkAvail(!networkAvail);
  };

  useEffect(() => {
    setTimeout(() => {
      versionUpdate();
    }, 5000);
  }, [loading]);

  const versionUpdate = async () => {
    // const currentVersion = await VersionCheck.getCurrentVersion();
    // console.log('app update URL', Config.APP_UPDATE_JSON);
    // getInstrumentedAxiosInstance()
    //   .get(Config.APP_UPDATE_JSON)
    //   .then(function (response) {
    //     // handle success
    //     if (Platform.OS === 'android') {
    //       if (
    //         response.data.android.force_update &&
    //         currentVersion != response.data.android.version
    //       ) {
    setShowForceUpdate(false);
    //         setappLink(response.data.android.store_url);
    //       } else {
    //         setShowForceUpdate(false);
    //       }
    //     }
    //     if (Platform.OS === 'ios') {
    //       if (
    //         response.data.ios.force_update &&
    //         currentVersion != response.data.ios.version
    //       ) {
    //         setShowForceUpdate(true);
    //         setappLink(response.data.ios.store_url);
    //       } else {
    //         setShowForceUpdate(false);
    //       }
    //     }
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     setShowForceUpdate(false);
    //   });
  };

  const _updateApp = () => {
    const appLink =
      'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN';
    BackHandler.exitApp();
    Linking.openURL(appLink);
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.GRADIENT_FIRST, COLORS.GRADIENT_SECOND]}
        style={{height: '100%', width: '100%'}}>
        {loading && (
          <View>
            <PageLoader />
          </View>
        )}
        {loadHome && (
          <View>
            <PageLoader />
          </View>
        )}


        {networkAvail && <NetworkInfo networkAvail={closeNetWorkInfo} />}
        {showForceUpdate && (
          <UpdateApp onPress={_updateApp} showForceUpdate={showForceUpdate} />
        )}
        <View style={styles.pageBg}>
          <DefaultHeader />
        </View>
        <ScrollView style={styles.container}>
          <Text style={styles.label}>Farmer Name</Text>
          <TextInput
            style={styles.input}
            value={farmerName}
            onChangeText={setFarmerName}
          />

          <Text style={styles.label}>Product</Text>
          {/* <TextInput
            style={styles.input}
            value={product}
            onChangeText={setProduct}
            onPressIn={() => {
              setProductVisible(!productVisible);
              setDistrictVisible(false);
            }}
          />

          {productVisible && (
            <View style={styles.slide}>
              {productOptions.map(opt => (
                <TouchableOpacity
                  key={opt}
                  onPress={() => {
                    setProduct(opt);
                    setProductVisible(false);
                  }}>
                  <Text style={styles.option}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )} */}

          <DropDownPicker
            open={openProduct}
            value={productNames}
            items={productOptions}
            setOpen={setOpenProduct}
            setValue={setProductNames}
            setItems={setProductOptions}
            placeholder="Select a Product"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            listMode="MODAL" // Enables scrolling
            dropDownDirection="AUTO" // Optional: auto decides up/down
            maxHeight={200}
          />

          <Text style={styles.label}>Village Name</Text>
          <TextInput
            style={styles.input}
            value={villageName}
            onChangeText={setVillageName}
          />

          <Text style={styles.label}>District Name</Text>
          {/* <TextInput
            style={styles.input}
            value={districtName}
            onChangeText={setDistrictName}
            onPressIn={() => {
              setDistrictVisible(!districtVisible);
              setProductVisible(false);
            }}
          /> */}
          {/* 
          {districtVisible && (
            <View style={styles.dropdown}>
              <ScrollView style={{maxHeight: 150}}>
                {districtOptions.map(Dopt => (
                  <TouchableOpacity
                    key={Dopt}
                    onPress={() => {
                      setDistrictName(Dopt);
                      setDistrictVisible(false);
                    }}>
                    <Text style={styles.option}>{Dopt}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )} */}

          <DropDownPicker
            open={openDistrict}
            value={districtNames}
            items={districtOptions}
            setOpen={setOpenDistrict}
            setValue={setDistrictNames}
            setItems={setDistrictOptions}
            placeholder="Select a District"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            listMode="MODAL" // Enables scrolling
            dropDownDirection="AUTO" // Optional: auto decides up/down
            maxHeight={200} // Limits dropdown height to allow scroll
          />

          <Text style={styles.label}>State</Text>
          <TextInput
            style={styles.input}
            // value={state}
            editable={false}
            onChangeText={setState}
            defaultValue="Madhya Pradesh"
          />
          <View style={styles.inputContact}>
            <Text style={styles.label}>Contact No</Text>
            <View style={styles.phoneInput}>
              <View style={styles.countryCodeContainer}>
                <Text style={styles.countryCode}>+91</Text>
              </View>
              <View style={styles.phoneNumberContainer}>
                <TextInput
                  style={styles.phoneNumberInput}
                  value={contactNo}
                  onChangeText={setContactNo}
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.labelB}>Quantity</Text>
            <TextInput
              style={styles.inputB}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.labelB}>Price</Text>
            <TextInput
              style={styles.inputB}
              value={price}
              onChangeText={setPrice}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.labelB}>Amount</Text>
            <TextInput
              style={styles.inputB}
              value={amount}
              onChangeText={setAmount}
              editable={false}
              keyboardType="number-pad"
            />
          </View>

          {/* {allFills && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Button pressed!')}>
              <Text style={styles.buttonText}>Generate Bill</Text>
            </TouchableOpacity>
          )} */}

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: allFills ? 'black' : 'gray'},
            ]}
            disabled={!allFills}
            onPress={() => console.log('Button pressed!')}>
            <Text style={styles.buttonText}>Generate Bill</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  pageBg: {
    // flex: 1,
    // width:'100%',
    // padding: 16,

    backgroundColor: '#F2F7FC',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  labelB: {
    width: 80,
    fontSize: 16,
    marginRight: 8,
    fontWeight: 'bold',
  },

  inputB: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },

  label: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  inputContact: {
    marginVertical: 12,
  },

  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
  },

  countryCodeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    // marginRight: 34,
  },

  countryCode: {
    fontSize: 16,
  },

  phoneNumberContainer: {
    flex: 1,
  },

  phoneNumberInput: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // marginHorizontal:10,
    // height: ,
    borderWidth: 1,
    borderColor: 'gray',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    // backgroundColor: '#000',
    marginTop: 30,
    marginBottom: 60,
  },
  disableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: 'red',
    marginTop: 30,
    marginBottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
  slide: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    // borderColor: '#000'
  },
  option: {
    padding: 8,
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },

  dropdown: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
  },
  dropdownContainer: {
    borderColor: '#aaa',
  },
});
