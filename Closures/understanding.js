// SHARED count example
// The variable count is NOT shared between counter1 and counter2 because:
// Think of createCounter as a parking meter factory
function createCounter() {
    let count = 0;  // This is like the meter's internal timer
    return function() {
        count++;     // Each minute adds to THIS meter's time
        return count;
    };
}

// Each meter is completely independent!
const meterAtMainStreet = createCounter();  // Installs Meter #1
const meterAtOakStreet = createCounter();   // Installs Meter #2 (different location!)

meterAtMainStreet(); // Meter #1 shows 1 minute
meterAtMainStreet(); // Meter #1 shows 2 minutes
meterAtMainStreet(); // Meter #1 shows 3 minutes

meterAtOakStreet();  // Meter #2 shows 1 minute (brand new meter!)
meterAtOakStreet();  // Meter #2 shows 2 minutes




// If You Want Them to Share
function createSharedCounter() {
    let count = 0;  // Only ONE count ever created
    
    return {
        increment1: function() {
            count++;
            return count;
        },
        increment2: function() {
            count++;
            return count;
        }
    };
}

const shared = createSharedCounter(); 
const shared1=createSharedCounter() // Only ONE call to outer function
console.log(shared.increment1()); // 1
console.log(shared.increment1()); // 2
console.log(shared.increment2()); // 3 (shares the same count!)
console.log(shared.increment2()); // 4
console.log(shared1.increment2());
function createAnotherCounter() {
    let count = 0;
    console.log(`Creating a NEW counter with count = ${count}`);
    
    return function() {
        count++;
        console.log(`I am using count = ${count} from MY closure`);
        return count;
    };
}

console.log("Creating counter1...");
const counterAnother1 = createAnotherCounter();  // See the "Creating" message

console.log("\nCreating counter2...");
const counterAnother2 = createAnotherCounter();  // See ANOTHER "Creating" message

console.log("\nCalling counter1:");
counterAnother1(); // Uses closure #1's count
counterAnother1(); // Still uses closure #1's count

console.log("\nCalling counter2:");
counterAnother2(); // Uses closure #2's count (starts fresh!)

console.log("\nCalling counter1 again:");
counterAnother1(); // Still at its own count (not affected by counter2)

