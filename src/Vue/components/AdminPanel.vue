<template>
  <form
    @submit.prevent="fetchForm"
    ref="form"
  >
    <h3>Name</h3>
    <input type="text" name="name" :class="$style.form__input" placeholder="Name" v-model="name">
    <h3>Price</h3>
    <input type="number" name="price" :class="$style.form__input" placeholder="0000" v-model="price">
    <h3>File</h3>
    <input type='file' name='filedata' id="file" ref="file" @change="addFile" :accept="acceptFiles.join(',')"/>
    <div v-show="srcImage" :class="$style.preview">
      <div :class="$style.preview__image">
        <div :class="$style.preview__remove" @click="srcImage = ''">&times;</div>
        <div :class="$style.preview__info">
          <span>{{ file.name }}</span>
          {{ formatBytes(file.size) }}
        </div>
        <img :src="srcImage" :alt="fileName"/>
      </div>
    </div>
    <div v-show="loading" :class="$style.loader">
      <img src="img/ZZ5H.gif" alt="loading..." />
    </div>
    <button :class="$style.btn" @click.prevent="trigger">Open file</button>
    <input :class="$style.btn" type="submit" value="Send" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      acceptFiles: ['.png', '.jpg', '.jpeg', '.gif'],
      srcImage: '',
      fileName: '',
      loading: false,
      file: ''
    }
  },
  methods: {
    trigger () {
      this.$refs.file.click();
    },
    addFile (event) {

      this.srcImage = ''
      this.loading = true

      if (!event.target.files.length) {
        this.loading = false
        return
      }

      this.file = event.target.files[0]

      if (!this.file.type.match('image')) {
        this.loading = false
        return
      }

      const reader = new FileReader()

      reader.onload = e => {
        this.loading = false
        this.srcImage = e.target.result
        this.fileName = this.file.name
      }

      reader.readAsDataURL(this.file)
    },
    formatBytes (bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];

    },
    fetchForm () {

      const formData = new FormData(this.$refs.form)

      formData.forEach(el => {
        console.log(el);
      })

      fetch('/imgUpload', {
        method: "post",
        body: formData
      });
    }
  }
}
</script>

<style module>
  .btn {
    background-color: white;
    border-radius: 15px;
    border: 2px solid darkgray;
    width: 100px;
    height: 30px;
    margin: 20px 0;
    display: block;
    cursor: pointer;
  }

  .btn:hover {
      color: red;
    }

  .admin__wrapper {
    padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
  }

  .form__input {
    display: block;
    max-width: 300px;
    padding: 14px 16px;
    border: 1px solid darkgray;
    font-size: 13px;
    line-height: 16px;
    color: #222222;
    margin: 20px 0;
  }

  .form__input::placeholder {
    font-size: 13px;
    line-height: 16px;
    color: #B1B1B1;
  }
    
  .form__input--attention {
    border-color: red;
  }

  input[type=file] {
    display: none;
  }

  .preview {
    display: flex;
  }

  .preview__image {
    position: relative;
    margin-top: 20px;
  }

  .preview__image img {
    width: 200px;
    height: auto;
  }

  .preview__image:hover .preview__remove {
    opacity: 1;
  }

  .preview__image:hover .preview__info {
    opacity: 1;
  }

  .preview__remove {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .7);
    font-weight: bold;
    color: black;
    opacity: 0;
    cursor: pointer;
    transition: opacity .2s;
  }

  .preview__info {
    padding: 4px;
    position: absolute;
    bottom: 2px;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgba(255, 255, 255, .7);
    font-weight: bold;
    color: black;
    opacity: 0;
    transition: opacity .2s;
  }

  .loader img {
    position:relative;
    margin: 50px;
    width: 100px;
    height: 100px;
  }

</style>