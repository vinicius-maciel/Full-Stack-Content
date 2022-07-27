<template>
  <div class="calculator">
    <MainDisplay :value="displayValue" />
    <MainButton label="AC" triple @onClick="clearMemory" />
    <MainButton label="/" operation @onClick="setOperation" />
    <MainButton label="7" @onClick="addDigit" />
    <MainButton label="8" @onClick="addDigit" />
    <MainButton label="9" @onClick="addDigit" />
    <MainButton label="*" operation @onClick="setOperation" />
    <MainButton label="4" @onClick="addDigit" />
    <MainButton label="5" @onClick="addDigit" />
    <MainButton label="6" @onClick="addDigit" />
    <MainButton label="-" operation @onClick="setOperation" />
    <MainButton label="1" @onClick="addDigit" />
    <MainButton label="2" @onClick="addDigit" />
    <MainButton label="3" @onClick="addDigit" />
    <MainButton label="+" operation @onClick="setOperation" />
    <MainButton label="0" double @onClick="addDigit" />
    <MainButton label="." @onClick="addDigit" />
    <MainButton label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import MainButton from "../components/MainButton.vue";
import MainDisplay from "../components/MainDisplay.vue";

export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: { MainDisplay, MainButton },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(`
              ${this.values[0]} ${currentOperation} ${this.values[1]}`);
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory();
            return;
          }
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      //Alternativa 1
      this.values[this.current] = displayValue;

      // Alternativa 2
      //   if (n !== ".") {
      //     const i = this.current;
      //     const newValue = parseFloat(displayValue);

      //     this.values[i] = newValue;
      //   }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px;
}
</style>